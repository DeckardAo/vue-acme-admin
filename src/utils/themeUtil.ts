import config from '../config';
import defaultConfig from '../config/default';

export function getModifyVars(): Record<string, string> { 

    const theme: Record<string, string> = Object.assign({}, defaultConfig.theme, config.theme);

    const colorKeys = Object.keys(theme);
    const modifyVars: Record<string, string> = {};

    colorKeys.forEach(key => {
        modifyVars[key + '-color'] = theme[key] as string;
    });

    return modifyVars;
}