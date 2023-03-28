export { };

declare global {
    interface Window {
        _emv: {
            [k: string]: unknown,
        },
        VK: {
            Widgets: {
                Group: (
                    elementId: string,
                    options: Partial<{ mode: number, color3: string }>,
                    groupId: string,
                ) => void,
            },
        },
    }
}
