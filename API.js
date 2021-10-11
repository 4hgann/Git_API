import prompts from 'prompts';

const questions = [
    {
        type:  'text',
        name: 'repo_owner',
        message: 'Who is the owner of the repo?'
    },

    {
        type: 'text',
        name: 'repo_name',
        message: 'What is the name of the repo?'
    }
];


(async () => {

        const response = await prompts(questions);
})();

