import { merge } from 'lodash';
import { defaultLocale } from 'locales/helpers';

export default merge(defaultLocale, {
    translation: {
        enums: {
            buy: {
                label: 'Купить',
            },
            liquidate: {
                label: 'Ликвидировать',
            },
            neutrino: {
                label: 'Нейтрино',
            },
            auction: {
                label: 'Аукцион',
            },
            rpd: {
                label: 'РПД',
            },
            liquidation: {
                label: 'Ликвидация',
            },
            currency: {
                waves: {
                    label: 'WAVES',
                },
                usdn: {
                    label: 'USD-N',
                },
                usdnb: {
                    label: 'USD-NB',
                },
                eurn: {
                    label: 'EUR-N',
                },
                eurnb: {
                    label: 'EUR-NB',
                },
            },
        },
        common: {
            ok: {
                label: 'Ок',
            },
            transfer: {
                label: 'Трансфер',
            },
            my_open_orders: {
                label: 'Мои открытые ордера',
            },
            my_orders_history: {
                label: 'История моих ордеров',
            },
            discount_with_percent: {
                label: 'Скидка (%)',
            },
            send: {
                label: 'Отправить',
            },
            receive: {
                label: 'Получить',
            },
            amount: {
                label: 'Количество',
            },
            total: {
                label: 'Объем',
            },
            exchange: {
                label: 'Обмен',
            },
            white_paper: {
                label: 'White paper',
            },
            faq: {
                label: 'FAQ',
            },
            blog: {
                label: 'Блог',
            },
            discussions: {
                label: 'Обсуждения',
            },
            github: {
                label: 'GitHub',
            },
            smart_contract: {
                label: 'Смарт Контракт',
            },
            terms_of_use: {
                label: 'Terms of Use',
            },
            asset_id: {
                label: 'Идентификатор Ассета',
            },
            redeem_waves: {
                label: 'Перевести WAVES',
            },
            confirm: {
                label: 'Подтвердить',
            },
            go_back: {
                label: 'Назад',
            },
            tokens_swap: {
                label: 'Обмен токенов',
            },
            confirm_details: {
                label: 'Подтвердить детали',
            },
        },
        modals: {
            create_invoice: {
                label: 'Создание инвойса',
            },
            get_share_link: {
                label: 'Поделиться ссылкой',
            },
            recipient_address_is_invalid: {
                label: 'Адрес получателя недействителен',
            },
            successful_transfer: {
                label: 'Трансфер успешно отправлен!',
            },
            transferring_funds_to_user: {
                label: 'Отправка средств пользователю',
            },
            please_transfer_funds_message: {
                label: 'Пожалуйста, отправьте средства с помощью Waves Keeper',
            },
        },
        views: {
            not_available_for_mobile_sorry_message: {
                label:
                    'Извините, Neutrino еще недоступен для моб. устройств. Пожалуйста, переключитесь на десктоп-версию.',
            },
            have_read_and_accept: {
                label: 'Я прочёл(а) и согласен(а)',
            },
            please_confirm_the_swap: {
                label: 'Пожалуйста, подтвердите обмен',
            },
        },
        bonds: {
            bonds_discount: {
                label: 'Скидка на бонды',
            },
            cancel_order: {
                label: 'Вы отменили ордер',
            },
            order_was_canceled: {
                label: 'Ордер был отменен',
            },
            set_liquidate_bonds_order: {
                label: 'Поставить ордер бондов на ликвидацю',
            },
        },
        order_book: {
            order_book: {
                label: 'Ордер бук',
            },
        },
        heading: {
            neutrino_dashboard: {
                label: 'Дашборд Нейтрино',
            },
            staking_dashboard: {
                label: 'Стейкинг Дашборд',
            },
            bonds_dashboard: {
                label: 'Дашборд Бондов',
            },
            transfers: {
                label: 'Трансферы',
            },
            invoice_generator: {
                label: 'Создание инвойса',
            },
        },
    },
});
