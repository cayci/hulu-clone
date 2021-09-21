import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    );
}
Results.displayName = "Results"
export default Results;