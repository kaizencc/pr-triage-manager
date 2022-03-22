export interface PullRequsetLabelManagerOptions {
    /**
     * @default - ['p0', 'p1', 'p2']
     */
    readonly priorityLabels?: string[];
    /**
     * @default - ['bug', 'feature-request']
     */
    readonly classificationLabels?: string[];
    /**
     * @default false
     */
    readonly dryRun?: boolean;
}
export declare class PullRequestLabelManager {
    private readonly client;
    private readonly owner;
    private readonly repo;
    private readonly pullNumber;
    private readonly priorityLabels;
    private readonly classificationLabels;
    private readonly dryRun;
    constructor(token: string, options: PullRequsetLabelManagerOptions);
    copyLabelsFromReferencedIssues(): Promise<void>;
    private findReferencedIssues;
    private issueLabels;
    private highestPrioLabel;
    private classification;
}
