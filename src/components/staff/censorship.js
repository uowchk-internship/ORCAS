import tickLogo from "../public/image/checked.png";
import crossLogo from "../public/image/cancel.png";

export default function Consorship(){
    return(
        <>
        <table id = "check-list">
          <tr>
            <th>Show:</th>
            <th>All</th>
            <th>Approved</th>
            <th>Denied</th> 
          </tr>
        </table>
        <table id="Detail-list">
          <tr>
            <td>Topic</td>
          </tr>
          <tr>
            <td>Social Science</td>
            <td><button>Show Detail</button></td>
          </tr>
          <tr>
            <td>Arts & Humanities</td>
            <td><button>Show Detail</button></td>
          </tr>
          <tr>
            <td>Science & Technology</td>
            <td><button>Show Detail</button></td>
          </tr>
          <tr>
            <td>Business</td>
            <td><button>Show Detail</button></td>
          </tr>
          <tr>
            <td>other</td>
            <td><button>Show Detail</button></td>
          </tr>
        </table>
        <table id = "button-list">
          <tr>
            <th>Status</th>
          </tr>
          <tr>
            <td><button><img src={tickLogo} alt="Logo-green-tick"/></button></td>
            <td><button><img src={crossLogo} alt="Logo-red-cross"/></button></td>
          </tr>
          <tr>
            <td><button><img src={tickLogo} alt="Logo-green-tick"/></button></td>
            <td><button><img src={crossLogo} alt="Logo-red-cross"/></button></td>
          </tr>
          <tr>
            <td><button><img src={tickLogo} alt="Logo-green-tick"/></button></td>
            <td><button><img src={crossLogo} alt="Logo-red-cross"/></button></td>
          </tr>
          <tr>
            <td><button><img src={tickLogo} alt="Logo-green-tick"/></button></td>
            <td><button><img src={crossLogo} alt="Logo-red-cross"/></button></td>
          </tr>
          <tr>
            <td><button><img src={tickLogo} alt="Logo-green-tick"/></button></td>
            <td><button><img src={crossLogo} alt="Logo-red-cross"/></button></td>
          </tr>
        </table>
        </>
    );
    }