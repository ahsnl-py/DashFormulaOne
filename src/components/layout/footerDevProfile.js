import AvatarAhsan from './images/ahsan-avatar.png'
import AvatarJD from './images/jahidul-punjabi-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';

export default [
    {
        id: 1,
        devFullName: 'Ahsanulnas',
        devPosition: 'Full Stack Developer',
        devAvatar: AvatarAhsan,
        devSocial: [
            {
                icon:  <FontAwesomeIcon icon={Brands.faGithub} />,
                link:  "/",
            },
            {
                icon:  <FontAwesomeIcon icon={Brands.faLinkedinIn} />,
                link:  "/",
            },
            {
                icon:  <FontAwesomeIcon icon={Icons.faIdBadge} />,
                link:  "/",
            },
        ]
    },
    {
        id: 2,
        devFullName: 'Jahidul Alam',
        devPosition: 'Backend/Analysts Developer',
        devAvatar: AvatarJD,
        devSocial: [
            {
                icon:  <FontAwesomeIcon icon={Brands.faGithub} />,
                link:  "/",
            },
            {
                icon:  <FontAwesomeIcon icon={Brands.faLinkedinIn} />,
                link:  "/",
            },
            {
                icon:  <FontAwesomeIcon icon={Icons.faIdBadge} />,
                link:  "/",
            },
        ]
    },

]