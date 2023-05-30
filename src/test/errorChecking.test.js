import errorChecking from "../components/errorChecking";

test('properly checking errors', () => {
    expect(errorChecking()).toBe(undefined)
})