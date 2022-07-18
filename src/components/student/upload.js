import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default function UploadComponent() {
  // const [year, setYear] = useState(1990);

  return (
    <>
      <form>
        <label for="se">Student Email:</label>
        <input type="text" id="se" name="ses" />

        <label for="topic">Topic:</label>
        <input type="text" id="topic" name="topic" />

        <label for="author">Author:</label>
        <input type="text" id="author" name="author" />

        <label for="datepicker">Publish year:</label>
        <Datetime
          initialViewMode="years"
          dateFormat="YYYY" timeFormat={false}
        />
        {/* <input type="text" class="form-control" name="datepicker" id="datepicker" /> */}

        <label for="publisher">Publisher:</label>
        <input type="text" id="publisher" name="publisher" />
        <p>
          Subject: (you can choose more than one)<span style={{ color: "#ED0A00" }}>*</span>
        </p>

        <input type="checkbox" id="SnT" name="SnT" value="SnT" />
        <label for="SnT"> Science & Technology</label>

        <input type="checkbox" id="AnH" name="AnH" value="AnH" />
        <label for="AnH"> Arts & Humanities</label>

        <input type="checkbox" id="SocialScience" name="SocialScience" value="SocialScience" />
        <label for="SocialScience"> Social Science</label>

        <input type="checkbox" id="Business" name="Business" value="Business" />
        <label for="Business"> Business</label>

        <input type="checkbox" id="Others" name="Others" value="Others" />
        <label for="Others"> Others</label><br />

        <p>Resources Type: (you can choose more than one) <span style={{ color: "#ED0A00" }}>*</span></p>
        <input type="checkbox" id="JournalArticle" name="JournalArticle" value="JournalArticle" />
        <label for="JournalArticle"> Journal Article</label>

        <input type="checkbox" id="NewspaperArticle" name="NewspaperArticle" value="NewspaperArticle" />
        <label for="NewspaperArticle"> Newspaper Article</label>

        <input type="checkbox" id="Video" name="Video" value="Video" />
        <label for="Video"> Video</label>

        <label for="link">Link:</label>
        <input type="text" id="link" name="link" />

        <h6 style={{ color: "#ED0A00" }}>
          Reminder: <br />
          Please input one link per upload only. <br />
          Please double check link is valid before submission.
        </h6>
        <input style={{ backgroundColor: "#ED0A00", color: "#ffffff", fontSize: "20px", padding: "12px 28px" }} type="submit"
          value="Submit" />
      </form>
    </>
  );
}
