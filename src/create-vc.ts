import { agent } from './veramo/setup'

async function main() {
    //TODO: aliasの値を設定したaliasの値に書き換えてください
    const identifier = await agent.didManagerGetByAlias({alias: 'YOUR_ALIAS_HERE'})

    const verifiableCredential = await agent.createVerifiableCredential({
        credential: {
            issuer: { id: identifier.did },
            credentialSubject: {
                id: 'did:web:example.com',
                you: 'Rock',
            },
        },
        proofFormat: 'jwt',
    })
    console.log(`New credential created`)
    console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)
