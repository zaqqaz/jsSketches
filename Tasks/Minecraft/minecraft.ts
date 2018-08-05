export class Action {
    input: string;
    actionName: string;
    output: string;

    constructor(input: string, actionName: string, output: string) {
        this.input = input;
        this.actionName = actionName;
        this.output = output;
    }
}

export function getRequiredActions(input: string, expectedOutput: string, availableActions: Action[]) {
    // in availableActions find all with output === expectedOutput
    // for all of them, recursively check Input => find actions with output === Input
    // repeat this process till find input which will be the same with initial input

    function findActionsByOutput(expected: string, actions: Action[]): Action[] | undefined {
        for (const action of actions) {
            if (action.output === expected) {
                if (action.input === input) {
                    return [action];
                }

                const result = findActionsByOutput(action.input, actions.filter(a => a !== action));

                if (result) {
                    return [action, ...result];
                }
            }
        }
    }
    const actions = findActionsByOutput(expectedOutput, availableActions);
    return actions ? actions.reverse() : undefined;
}
