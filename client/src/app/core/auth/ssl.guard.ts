import { CanMatchFn } from '@angular/router';
import { environment } from '../../../environment/environment';

export const sslGuard: CanMatchFn = () => {
    if(typeof window == 'undefined') return true;
    
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;

    const devModeOn = String(environment.DEV_MODE).toUpperCase().trim() === 'ON';
    const allowedInsecureHost: string[] = Array.isArray(environment.ALLOW_INSECURE_HOSTS)
        ? environment.ALLOW_INSECURE_HOSTS
        : [];
    const isAllowedInsecureHost = allowedInsecureHost.includes(hostname);

    if (devModeOn && isAllowedInsecureHost) return true;
    if (protocol == 'file' && devModeOn) return true;

    const isSecure = window.isSecureContext || protocol == 'https';
    if (isSecure) return true;

    const sslUrl = `https://${window.location.host}${window.location.pathname}${window.location.search}${window.location.hash}`
    window.location.replace(`${sslUrl}`);
    return false;
}