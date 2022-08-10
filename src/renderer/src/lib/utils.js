export const TABS = {
    SMG: 'smg',
    RIFLES: 'rifle',
    MISC: 'misc'
}

export const DELAY_OPTIONS = [50, 150, 250, 350]

export function loadFrom(filename) {
    return JSON.parse(window.api.readFileSync(window.api.path.join(
        window.api.__dirname,
        `renderer/src/lib/data/${filename}`,
    ), 'utf8'))
}

export function saveChange(filename, data) {
    window.api.writeFile(
        window.api.path.join(
            window.api.__dirname,
            `renderer/src/lib/data/${filename}`
        ),
        JSON.stringify(data, null, 2)
    );
}

export function makeFastzoom(delay) {
    window.api.robot.mouseClick('right')
    setTimeout(() => {
        window.api.robot.mouseClick('left')
        window.api.robot.keyTap('q')
        window.api.robot.keyTap('q')
    }, +delay)
}