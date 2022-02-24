import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

const chats = [
	{
		id: 'chat1',
		nameChat: 'first chat',
	},
	{
		id: 'chat2',
		nameChat: 'second chat',
	},
]

export const ChatList = () => {
	return (
		<>
			<List className='max-w-md align-center mx-auto p-10 bg-slate-100 rounded-lg text-cyan-700 '>
				{chats.map(chat => (
					<ListItem disablePadding key={chat.id}>
						<ListItemButton>
							<Link to={`/chats/${chat.id}`}>
								<ListItemText primary={chat.nameChat} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Outlet />
		</>
	)
}
