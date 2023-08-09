import { Lang } from "@/types/highlighting.type";

export class Module {
    lang: Lang;

    constructor(lang: Lang) {
        this.lang = lang;
    }

    process(text: string): string {
        this.lang.keywords.forEach(keyword => {
            text = text.replace(new RegExp(keyword.name, "g"), `<span style="color: rgb(${keyword.color.r}, ${keyword.color.g}, ${keyword.color.b})">${keyword.name}</span>`);
        })

        return text;
    }
}