import { App } from 'vue';
import ColorPicker from './color-picker';

const install = (app: App) => {
	const components = [
    ColorPicker,
];
	components.forEach((item) => {
		app.component(item.name || item.__name, item);
	});
};

export { ColorPicker };

export default {
	install,
	ColorPicker,
};