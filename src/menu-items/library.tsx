// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { MessageOutlined, EmailIcon, SendIcon };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const libraryPages: NavItemType = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'library',
      title: <FormattedMessage id="library" />,
      type: 'collapse',
      icon: icons.MessageOutlined,
      children: [
        {
          id: 'add-book',
          title: <FormattedMessage id="add-book" />,
          type: 'item',
          url: '/library/add/send',
          icon: icons.SendIcon
        },
        {
          id: 'view-books',
          title: <FormattedMessage id="view-books" />,
          type: 'item',
          url: '/library/get/list',
          icon: icons.EmailIcon
        }
      ]
    }
  ]
};

export default libraryPages;