import { DefineComponent } from 'vue'

declare const ColorPicker: DefineComponent<{
    modelValue?: string;
    showUsed?: boolean;
    onChange?: (color: string) => void;
}>

export { ColorPicker }
export default ColorPicker
