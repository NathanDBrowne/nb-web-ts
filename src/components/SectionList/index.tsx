import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Footer from "../Footer";
import { RouteLink } from "../Button";

type sectionProps = {
  headers: any;
  sectionInfo: any;
  sectionTitle: string;
  sectionId: string;
};

const SectionList = ({
  headers,
  sectionInfo,
  sectionTitle,
  sectionId,
}: sectionProps) => {
  type cellProps = { k: string; v: string; label: string };

  const InferCellType = ({ k, v, label }: cellProps) => {
    let elem: any;

    const navigate = useNavigate();

    const handleClick = () =>
      navigate("/codec/articles/" + v, {
        state: { title: label, prevId: sectionId, sectionTitle: sectionTitle },
      });

    switch (["id"].indexOf(k) > -1) {
      case true:
        elem = (
          <button
            className="ListLink"
            style={{ textDecoration: "none", color: "#fff" }}
            onClick={handleClick}
          >
            READ
          </button>
        );
        break;

      default:
        elem = <h3>{v}</h3>;
    }
    return <>{elem}</>;
  };

  return (
    <>
      <div className="TableContainer">
        <div
          style={{
            display: "flex",
            background: "#222",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <RouteLink to="/codec" text="Codec" className={"GeneralLink"} />
        </div>
        <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <TableContainer
            component={Paper}
            style={{ border: "1px solid #333", padding: "1px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#333" }}>
                  {headers.map((header: string) => (
                    <TableCell
                      align="right"
                      style={{ color: "#fff", fontFamily: "inherit" }}
                    >
                      <h3 style={{ fontWeight: "bold" }}>{header}</h3>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {sectionInfo.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {Object.entries(row).map(([k, v]: any[]) => (
                      <TableCell
                        align="right"
                        style={{
                          fontFamily: "inherit",
                          color: "#fff",
                          background: "#101010",
                        }}
                      >
                        <InferCellType k={k} v={v} label={row.name} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div
          style={{
            display: "flex",
            background: "#222",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <RouteLink to="/codec" text="Codec" className={"GeneralLink"} />
        </div>
      </div>
    </>
  );
};

export default SectionList;
