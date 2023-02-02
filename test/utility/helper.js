const waitForTextChanged = async (element, newText, timeout) => {
    await browser.waitUntil(async () => {
        return (await element.getText()) === newText;
    }, {timeout: timeout});
}

const switchToFrame = async (frameLocator, timeout) => {
    const frame = await $(frameLocator);
    await browser.waitUntil(() => frame.isExisting(), {timeout: timeout});
    await browser.switchToFrame(frame);
}

module.exports = {waitForTextChanged, switchToFrame};