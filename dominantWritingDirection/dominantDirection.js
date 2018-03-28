function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from &&
                code < to)) {
            return script;
        }
    }
    return null;
}