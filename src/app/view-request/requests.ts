export class Requests {
    constructor(
        public id: number,
        public name: string,
        public title: string,
        public reward: string[],
        public quantity: number[],
        public desc: string
    ) { }
}
