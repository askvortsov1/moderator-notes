import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import fullTime from 'flarum/helpers/fullTime';

export default class NoteListItem extends Component {
    view() {
        const { note } = this.props;
        const addedByUser = note.addedByUser();
        const formatedDate = fullTime(note.createdAt());

        return (
            <div className="DiscussionListItem">
                <div className="DiscussionListItem-main">
                    <h3 className="DiscussionListItem-title">{username(addedByUser)}</h3>
                    {formatedDate}
                    <ul className="DiscussionListItem-info">
                        <li className="item-excerpt">
                            <span>{note.note()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
