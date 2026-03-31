import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SubmitAttemptResult {
    score: bigint;
    timestamp: Time;
    passed: boolean;
}
export interface SubmitAttemptInput {
    duration: bigint;
    responses: Array<bigint>;
}
export type Time = bigint;
export interface ExamConfig {
    timeLimitMinutes: bigint;
    passingScorePercent: bigint;
}
export interface QuestionDTO {
    questionText: string;
    correctAnswerIndex: bigint;
    options: Array<string>;
}
export interface Attempt {
    duration: bigint;
    score: bigint;
    timestamp: Time;
}
export interface backendInterface {
    addQuestion(question: QuestionDTO): Promise<void>;
    getExamConfig(): Promise<ExamConfig>;
    getQuestions(): Promise<Array<QuestionDTO>>;
    getUserAttempts(user: Principal): Promise<Array<Attempt>>;
    setExamConfig(config: ExamConfig): Promise<void>;
    submitAttempt(input: SubmitAttemptInput): Promise<SubmitAttemptResult>;
}
