import Link from 'next/link';

const BottomBar = ({}) => {
    return(
      <footer className="bottom-bar">
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="">
          <a>Search</a>
        </Link>
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="">
          <a>Saved</a>
        </Link>
        <Link href="">
          <a>Home</a>
        </Link>
      </footer>
    );
}

export default BottomBar;