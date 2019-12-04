import React from 'react';
import _isEqual from 'lodash-es/isEqual';

import {apiAddConfigs, apiRemoveConfigs, getConfigId} from '../../actions/api';
import {connect} from 'react-redux';

const stateMap = state => ({
    apiData: state.api && state.api.data || null,
});

export default configsFunc => WrappedComponent => connect(stateMap)(
    class ApiHOC extends React.Component {

        static WrappedComponent = WrappedComponent;
    
        constructor() {
            super(...arguments);
    
            this.state = {
                overwritedProps: null,
            };
    
            this._onUpdate = this._onUpdate.bind(this);
        }
    
        componentDidMount() {
            this.props.dispatch(apiAddConfigs(configsFunc({...this.props, ...this.state.overwritedProps})));
        }
    
        componentWillUnmount() {
            this.props.dispatch(apiRemoveConfigs(configsFunc({...this.props, ...this.state.overwritedProps})));
        }
    
        componentDidUpdate(prevProps, prevState) {
            const prevConfigs = [].concat(configsFunc({...prevProps, ...prevState.overwritedProps}));
            const nextConfigs = [].concat(configsFunc({...this.props, ...this.state.overwritedProps}));
            for (let i = 0; i < Math.max(prevConfigs.length, nextConfigs.length); i++) {
                if (!_isEqual(prevConfigs[i], nextConfigs[i])) {
                    this.props.dispatch([
                        apiRemoveConfigs(prevConfigs[i]),
                        apiAddConfigs(nextConfigs[i]),
                    ]);
                }
            }
        }
    
        render() {
            const data = {};
            if (this.props.apiData) {
                [].concat(configsFunc({...this.props, ...this.state.overwritedProps})).forEach(config => {
                    data[config.key] = this.props.apiData[getConfigId(config)];
                });
            }
    
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state.overwritedProps}
                    {...data}
                    updateApiConfig={this._onUpdate}
                />
            );
        }
    
        _onUpdate(overwritedProps) {
            this.setState({overwritedProps});
        }
    }
)