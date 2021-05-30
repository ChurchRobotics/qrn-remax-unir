import { loadFont as loadFontFace } from '@remax/toutiao';
export default class FontLoader {
    static loadFontSet(fontSet) {
        Object.keys(fontSet).forEach((fontName) => {
            const url = fontSet[fontName]
            loadFontFace(url);
        })
    }
}
