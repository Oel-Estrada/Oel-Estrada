export interface ContactInfo {
    phone: string;
    email: string;
    telegramUsername: string;
    linkedInUsername: string;
    website?: string;
    whatsapp: string;
    telegram: string;
    linkedIn: string;
}

export const contactInfo: ContactInfo = {
    phone: "79955556081",
    email: "oelestradacampos@gmail.com",
    telegramUsername: "Oel_Estrada",
    linkedInUsername: "oel-estrada",
    website: "https://www.oelestrada.ru",

    get whatsapp() {
        return `https://wa.me/${this.phone.replace(/[^\d]/g, "")}`;
    },

    get telegram() {
        return `https://t.me/${this.telegramUsername}`;
    },

    get linkedIn() {
        return `https://www.linkedin.com/in/${this.linkedInUsername}`;
    }
};
