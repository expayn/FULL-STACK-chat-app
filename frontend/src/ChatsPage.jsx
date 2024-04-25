import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = props => {
	return (
		<div className='background'>
			<PrettyChatWindow
				projectId='76bd7a40-1ed3-45c1-a215-07b80b8fdc18'
				username={props.user.username}
				secret={props.user.secret}
			/>
		</div>
	)
}

export default ChatsPage
