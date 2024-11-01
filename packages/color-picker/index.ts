import ColorPicker from './index.vue';
import { App } from 'vue';

ColorPicker.install = (app: App) => {
	app.component(ColorPicker.name || ColorPicker.__name, ColorPicker);
};

export default ColorPicker;