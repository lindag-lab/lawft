

export class UtilsPageActions {

    randChars = '';

    randomString(length = 5) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        return Array.from({ length }, () =>
        chars[Math.floor(Math.random() * chars.length)]
        ).join('');
    }

    refactorEmail(baseEmail) {
        const [localPart, domain] = baseEmail.split('@');
        if (!domain) {
            return baseEmail;
        }
        const separator = localPart.endsWith('_') ? '' : '_';
        return `${localPart}${separator}${this.randChars}@${domain}`;
    }

    refactorCaseName(baseCaseName) {
        return `${baseCaseName}_${this.randChars}`;
    }

    refactorLastName(baseLastName) {
        this.randChars = this.randomString();
        return `${baseLastName}${this.randChars}`;
    }

}   