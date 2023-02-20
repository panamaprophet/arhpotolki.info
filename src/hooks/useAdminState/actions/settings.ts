import { Setting } from '../../../types';


export const updateSetting = ({ key, value }: Setting) => fetch(`/api/settings/${key}`, {
    method: 'PUT',
    body: JSON.stringify({ value }),
});
