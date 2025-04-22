export function hash(value:string):number {
    
    //will hash a string with a length less than 20 characters
    if (value.length > 20) {
        throw new Error('string for hashing must be less than 20 characters');
    };

    const utf8Value = new TextEncoder().encode(value);

    let hash = 1;
    utf8Value.forEach((value) => {
        hash *= value;
    });

    return hash;
}