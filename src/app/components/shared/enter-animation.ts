import { trigger, style, transition, animate, group, keyframes } from '@angular/animations';
import { state } from '@angular/core';

export const item_enter_leave = trigger('itemAnim', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
    ]),
    transition(':leave', [
        group([
            animate('0.3s ease', keyframes([
                style({ transform: 'translateX(30px)', offset: 0 }, ),
                style({ opacity: 0.6, offset: 0.1 }, ),
                style({ transform: 'translateX(60px)', offset: 0.2 }, ),
                style({ opacity: 0.4, offset: 0.3 }, ),
                style({ transform: 'translateX(90px)', offset: 0.4 }, ),
                style({ opacity: 0.1, offset: 0.5 }, ),
                style({ transform: 'translateX(100px)', offset: 0.9 }, ),
                style({ opacity: 0, offset: 1.0 }, ),
            ]))
        ])
    ])
]);