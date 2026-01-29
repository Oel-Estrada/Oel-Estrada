import { parsePhoneNumberFromString } from 'libphonenumber-js';

export class ContactInfo {
    phone?: string;
    email: string;
    telegramUsername?: string;
    linkedinUsername?: string;
    githubUsername?: string;
    website?: string;

    constructor(opts: {
        phone?: string;
        email: string;
        telegramUsername?: string;
        linkedinUsername?: string;
        githubUsername?: string;
        website?: string;
    }) {
        this.phone = opts.phone;
        this.email = opts.email;
        this.telegramUsername = opts.telegramUsername;
        this.linkedinUsername = opts.linkedinUsername;
        this.githubUsername = opts.githubUsername;
        this.website = opts.website;
    }

    get sanitizedPhone(): string {
        if (!this.phone) return '';
        const phoneNumber = parsePhoneNumberFromString(
            this.phone.startsWith('+') ? this.phone : `+${this.phone}`,
        );
        return phoneNumber
            ? phoneNumber.number.replace('+', '')
            : this.phone.replace(/[^\d]/g, '');
    }

    get formattedPhone(): string {
        if (!this.phone) return '';
        const phoneNumber = parsePhoneNumberFromString(
            this.phone.startsWith('+') ? this.phone : `+${this.phone}`,
        );
        return phoneNumber ? phoneNumber.formatInternational() : this.phone;
    }

    get whatsapp(): string {
        return `https://wa.me/${this.sanitizedPhone}`;
    }

    get telegram(): string {
        return `https://t.me/${this.telegramUsername ?? ''}`;
    }

    get linkedin(): string {
        return `https://www.linkedin.com/in/${this.linkedinUsername ?? ''}`;
    }

    get github(): string {
        return `https://github.com/${this.githubUsername ?? ''}`;
    }
}

export const contactInfo = new ContactInfo({
    phone: '79955556081',
    email: 'oelestradacampos@gmail.com',
    telegramUsername: 'Oel_Estrada',
    linkedinUsername: 'oel-estrada',
    githubUsername: 'Oel-Estrada',
    website: 'https://www.oelestrada.ru',
});
