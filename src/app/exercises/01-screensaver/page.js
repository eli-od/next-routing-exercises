import Link from 'next/link';

function ScreenSaverExercise() {
  const colors = ['yellow', 'green', 'lavender', 'slateblue', 'hotpink'];
  return (
    <main>
      <div>Choose your color: </div>
      <ol>
        {colors.map((color, index) => {
          return (
            <li key={index}>
              <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}

export default ScreenSaverExercise;
