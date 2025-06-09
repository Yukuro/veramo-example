import { agent } from './veramo/setup'

async function main() {
    const result = await agent.verifyCredential({
        //TODO:作成したVCの値で書き換えてください
        credential: {},
    })
    console.log(`Credential verified`, result.verified, result.error)
}

main().catch(console.log)
