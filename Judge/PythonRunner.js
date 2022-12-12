const { spawn } = require("child_process");
const Runner = require("./Runner");


class PythonRunner extends Runner 
{
  sourceFile() {
    return this.sourcefile;
  }
  testFile() {
    return this.testfile;
  }

  constructor() {
    super();
    this.sourcefile = "Solution.py";
    this.testfile = "SolutionTester.py";
  }

  run(file , directory , filename , extension , callback)
  {
      if(extension.toLowerCase() !=="py")
        console.log(`${file} is not a python file.`);

        this.execute(file , directory, callback)
  }


  execute(file , directory , callback)
  {
      const options = {cwd : directory};
      const argsRun = []

      argsRun[0] = file

    console.log(`options: ${options}`);
    console.log(`argsRun: ${argsRun}`);

    const executor = spawn("python" , argsRun , options)
    
    executor.stdout.on("data" , (out)=>{
         
        const dataOut = String(out)

        console.log(`pythonRunner->execute(): stdout:`);

        console.log(dataOut);

       if (dataOut.startsWith("[Success]") || dataOut.startsWith("[Fail]")) {
        callback("ok", String(out)); // ok, no error
      }

    executor.stderr.on("data", output => {
      console.log(`stderr: ${String(output)}`);
      callback("err_exe", String(output)); // err, execution failure
    });

    executor.on("close", output => {
      console.log(`stdout: ${output}`);
    });

    })


  }


}


module.exports = PythonRunner;
