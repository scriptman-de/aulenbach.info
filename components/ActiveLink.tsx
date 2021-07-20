import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {Children} from 'react';


// function ActiveLink({children, href}) {
//     const router = useRouter()
//     const style = {
//         color: router.asPath === href ? 'red' : 'green'
//     }
//
//     return (
//         <Link />
//         <a href={href} style={style}>
//             {children}
//         </a>
//     )
// }

// const ActiveLink = ({children, activeClassName, ...props}: any) => {
//     const router = useRouter();
//     const child = Children.only(children);
//     const childClassName = child.props.className || '';
//     const className =
//         router.asPath === props.href || router.asPath === props.as
//             ? `${childClassName} ${activeClassName}`.trim()
//             : childClassName;
//
//     return (
//         <Link {...props}>
//             {React.cloneElement(child, {
//                 className: className || null,
//             })}
//         </Link>
//     );
// };

export default ActiveLink;
