import Link from 'next/link';

const BottomBar = ({}) => {
    return(
      <footer className="bottom-bar">
        <Link href="/">
          <a>Home</a>
        </Link>
      </footer>
    );
}

export default BottomBar;