import React, { useEffect } from "react";
import { FC } from "react";

interface Props {}

const CompositionMain: FC<Props> = () => {
  abstract class CommandBase {
    abstract add(command: CommandBase): void;
    abstract exec(): void;
  }
  class MarcoCommand extends CommandBase {
    private commandList: CommandBase[] = [];
    add(command: CommandBase) {
      this.commandList.push(command);
    }
    exec() {
      for (const command of this.commandList) {
        command.exec();
      }
    }
  }

  class QQCommand extends CommandBase {
    add(command: CommandBase) {
      throw new Error("error");
    }

    exec(): void {
      console.log("open qq");
    }
  }
  class PcCommand extends CommandBase {
    add(command: CommandBase) {
      throw new Error("error");
    }

    exec(): void {
      console.log("open compute");
    }
  }
  class TvCommand extends CommandBase {
    add(command: CommandBase): void {
      throw new Error("error");
    }

    exec(): void {
      console.log("open TV");
    }
  }
  class SoundCommand extends CommandBase {
    add(command: CommandBase): void {
      throw new Error("error");
    }

    exec(): void {
      console.log("open sound box");
    }
  }

  class AcCommand extends CommandBase {
    add(command: CommandBase): void {
      throw new Error("error");
    }

    exec(): void {
      console.log("open AC");
    }
  }

  class DoorCommand extends CommandBase {
    add(command: CommandBase): void {
      throw new Error("error");
    }

    exec(): void {
      console.log("close door");
    }
  }

  useEffect(() => {
    const marcoCommand1 = new MarcoCommand();
    marcoCommand1.add(new AcCommand());
    const marcoCommand2 = new MarcoCommand();
    marcoCommand2.add(new TvCommand());
    marcoCommand2.add(new SoundCommand());
    const marcoCommand = new MarcoCommand();
    marcoCommand.add(new DoorCommand());
    marcoCommand.add(new PcCommand());
    marcoCommand.add(new QQCommand());
    const command = new MarcoCommand();
    command.add(marcoCommand1);
    command.add(marcoCommand2);
    command.add(marcoCommand);
    command.exec();
  }, []);
  return <h1>组合模式</h1>;
};

export default CompositionMain;
