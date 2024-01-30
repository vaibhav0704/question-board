export enum Subject {
    Math = 'math',
    Physics = 'physics',
    Chemistry = 'chemistry'
}

export interface QuestionData {
    math: QuestionRow[],
    physics: QuestionRow[],
    chemistry: QuestionRow[]
}

export interface QuestionRow {
    section: string,
    chapter: string,
    answer: Answer,
    difficulty: Difficulty,
    positiveMark: number,
    negativeMark: number,
}

enum Answer {
    A,
    B,
    C,
    D
}

enum Difficulty {
    Easy,
    Meduim,
    Hard
}