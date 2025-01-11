import "../app.css";

const SummaryPreview = ({ previewSummary }) => {
    return (
        <article className="preview-summary">
            <div className="preview-body">
                <p>{previewSummary.summary}</p>
            </div>


        </article>
    );
}


export default SummaryPreview;