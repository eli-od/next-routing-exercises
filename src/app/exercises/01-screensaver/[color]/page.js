import ScreenSaver from '../../../../components/ScreenSaver';

async function ColoredPage({params}) {
    const { color } = await params;
    console.log(color);
    return (
        <main className="screen-saver-wrapper">
        <ScreenSaver color={color} />
        </main>
    );
}

export default ColoredPage;