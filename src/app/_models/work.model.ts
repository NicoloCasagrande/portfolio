export class Work {
    name: string;
    description: string;
    link: string;
    github_link: string;
    tools:string[]
    constructor(name: string, description:string, link:string, github_link:string, tools:string[]){
        this.name = name;
        this.description = description;
        this.link = link;
        this.github_link = github_link;
        this.tools = tools;
    }
}