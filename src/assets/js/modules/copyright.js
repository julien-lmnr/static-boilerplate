export default function copyright() {
    if (window.console) {
        const e = navigator.userAgent.toLowerCase();

        if (e.indexOf('chrome') > -1 || e.indexOf('firefox') > -1) {
            window.console.log.apply(console, [
                '%c %c  Réalisé par labfordev. %c %c  https://labfordev.fr  %c',
                'background: #e72632; border: 1px solid #e72632; padding:5px 0; margin:3px 0 10px 0;',
                'background: #ffffff; border: 1px solid #e72632; color: #e72632; padding:5px 0; margin:3px 0 10px 0;',
                'background: #e72632; border: 1px solid #e72632; padding:5px 0; margin:3px 0 10px 0;',
                'background: #ffffff; border: 1px solid #e72632; color: #e72632; padding:5px 0; margin:3px 0 10px 0;',
                'background: #e72632; border: 1px solid #e72632; padding:5px 0; margin:3px 0 10px 0;',
            ]);
        } else {
            window.console.log('Réalisé par labfordev - https://labfordev.fr');
        }
    }
}
