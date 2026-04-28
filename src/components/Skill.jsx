import { useEffect, useState } from "react";
import youtube from "../assets/youtube.png";
import "./ActionCheckBox.css";
import { formatActionItemsToState } from "../utils/format-action-items-to-state";
import { skillStatuses } from "../constants/skill-statuses";

const Skill = (props) => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [checked, setChecked] = useState(
    formatActionItemsToState(props.skill.actionItems, false),
  );

  useEffect(() => {
    switch (statusIndex) {
      case 1:
        setChecked(formatActionItemsToState(props.skill.actionItems, true));
        break;
      case 2:
        const allAreTrue = props.skill.actionItems.every(
          (item) => checked[item],
        );

        if (allAreTrue) {
          setChecked(formatActionItemsToState(props.skill.actionItems, false));
        }
        break;
      case 3:
        setChecked(formatActionItemsToState(props.skill.actionItems, false));
        break;
      default:
        break;
    }
  }, [statusIndex]);

  useEffect(() => {
    const areAllTrue = props.skill.actionItems.every((item) => checked[item]);
    const someAreTrue = props.skill.actionItems.some((item) => checked[item]);

    if (areAllTrue) {
      setStatusIndex(1);
      return;
    } else if (someAreTrue) {
      setStatusIndex(2);
      return;
    }
  }, [checked]);

  return (
    <div key={props.skill.label} style={styles.container}>
      <div
        style={{
          ...styles.topSection,
          backgroundColor: skillStatuses[statusIndex].background,
        }}
      >
        <h6 style={styles.h6}>{props.skill.label}</h6>
        <form>
          <select
            value={statusIndex}
            onChange={(e) => {
              e.preventDefault();
              setStatusIndex(+e.target.value);
            }}
          >
            {skillStatuses.map((status, index) => {
              const isDefault = index === 0;

              return (
                <option
                  key={status.label}
                  disabled={isDefault}
                  defaultValue={isDefault}
                  value={index}
                >
                  {status.label}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div style={styles.skillDiv}>
        {props.skill.actionItems.map((item, index) => {
          const lastIndex = index === props.skill.actionItems.length - 1;
          const isChecked = checked[item];
          const link = () => {
            const url = "https://www.youtube.com/results?search_query=" + item;
            return window.open(url);
          };
          return (
            <div
              key={item}
              style={{
                ...styles.section,
                color: isChecked
                  ? "var(--color-third)"
                  : "var(--color-secondary)",
                borderBottom: lastIndex ? 0 : "1px solid var(--color-third)",
              }}
            >
              <input
                className={isChecked ? "checked" : ""}
                type="checkbox"
                value={item}
                checked={isChecked}
                onChange={() => {
                  setChecked((prev) => {
                    return {
                      ...prev,
                      [item]: !isChecked,
                    };
                  });
                }}
              />
              <span
                style={{
                  ...styles.span,
                  textDecoration: isChecked ? "line-through" : undefined,
                }}
              >
                {item}
              </span>
              <button
                onClick={link}
                style={{
                  border: 0,
                  background: "transparent",
                }}
              >
                <img
                  alt="Youtube link"
                  src={youtube}
                  style={{
                    ...styles.img,
                    opacity: isChecked ? 0.2 : 0.7,
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: 0,
    padding: 0,
    marginBottom: 28,
    border: "1px solid var(--color-third)",
    borderRadius: 15,
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    margin: 0,
    padding: "1rem",
    gap: "1rem",
  },
  span: {
    fontSize: "18px",
    textAlign: "left",
    padding: "0",
    margin: "0",
    marginLeft: "45px",
    fontWeight: "300",
    marginBottom: "0.5rem",
    marginRight: "0.3rem",
  },
  img: {
    height: "15px",
    width: "15px",
    margin: 0,
    paddingTop: "0.3rem",
    alignItems: "center",
  },
  h6: {
    fontSize: "18px",
    paddingBottom: "0.7rem",
    marginBottom: "0.2rem",
    textAlign: "left",
    fontWeight: "400",
    padding: 0,
    margin: 0,
  },
  skillDiv: {
    borderRadius: "15px",
    marginTop: "0.6rem",
    textAlign: "left",
  },
};

export default Skill;
