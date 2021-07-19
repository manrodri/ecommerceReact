import React from 'react'
import Amplify from 'aws-amplify'
import awsmobile from "../../aws-exports";
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsmobile)

const SignOut = () => {
    return(
        <div>
            <header>
                <AmplifySignOut className={'form-control, btn, btn-primary'}/>
                <h3>My App Content</h3>
            </header>
        </div>
    )
}
export default withAuthenticator(SignOut)