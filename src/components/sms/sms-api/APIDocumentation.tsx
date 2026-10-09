import React from "react";
import { FileText, Download, Code, BookOpen, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CodeBlock from "./CodeBlock";

const documentationSections = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Start Guide",
    description: "Get up and running in under 5 minutes with our step-by-step integration guide",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "API Reference",
    description: "Complete endpoint documentation with request parameters and response formats",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Sample Codes",
    description: "Ready-to-use code examples in Android, Node.js, Swift, .NET, Python, and PHP",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Best Practices",
    description: "Industry-standard guidelines for optimal SMS delivery and error handling",
  },
];

const codeSamples: Array<{
  value: string;
  label: string;
  language: "bash" | "json" | "java" | "javascript" | "swift" | "csharp" | "python" | "php";
  code: string;
}> = [
  {
    value: "android",
    label: "ANDROID",
    language: "java",
    code: `StringRequest registerRequest = new StringRequest(Request.Method.POST, "https://cp.bsms.pk/api/quick/message",
    new Response.Listener() {
        @Override
        public void onResponse(String response) {
            pDialog.dismiss();
            try {
                JSONObject object = new JSONObject(response);
                Log.d("Response from API", "onResponse: " + response);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    },
    new Response.ErrorListener() {
        @Override
        public void onErrorResponse(VolleyError error) {
            new VolleyErrorManager(error, mContext,"Exception: ");
        }
    }
) {
    @Override
    protected Map getParams() {
        Map params = new HashMap();
        params.put("user", "username");
        params.put("password", "secret");
        params.put("to", "923123456789");
        params.put("mask", "BrainTEL");
        params.put("message", "Your message");

        return params;
    }
};`,
  },
  {
    value: "nodejs",
    label: "NODE.JS",
    language: "javascript",
    code: `var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://cp.bsms.pk/api/quick/message",
    "body": JSON.stringify({
        "user": "username", "password": "secret", "to": "923123456789", "mask": "BrainTEL", "message": "Your message"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});`,
  },
  {
    value: "swift",
    label: "SWIFT",
    language: "swift",
    code: `let params = ["user": "username", "password": "secret", "to": "923123456789", "mask": "BrainTEL", "message": "Your message"] as Dictionary

var request = URLRequest(url: URL(string: "https://cp.bsms.pk/api/quick/message")!)
request.httpMethod = "POST"
request.httpBody = try? JSONSerialization.data(withJSONObject: params, options: [])
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let session = URLSession.shared
let task = session.dataTask(with: request, completionHandler: { data, response, error -> Void in
    do {
        let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary
        print(json)
    } catch {
        print("error")
    }
})
task.resume()`,
  },
  {
    value: "dotnet",
    label: ".NET",
    language: "csharp",
    code: `using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace HttpClientSample
{
    public class Message
    {
        public string user { get; set; }
        public string password { get; set; }
        public string to { get; set; }
        public string mask { get; set; }
        public string message { get; set; }
    }

    class Program
    {
        static HttpClient client = new HttpClient();

        static async Task CreateMessageAsync(Message message)
        {
            HttpResponseMessage response = await client.PostAsJsonAsync(
                "api/quick/message", message);
            response.EnsureSuccessStatusCode();
            return response.Headers.Location;
        }

        static void Main()
        {
            RunAsync().GetAwaiter().GetResult();
        }

        static async Task RunAsync()
        {
            client.BaseAddress = new Uri("https://cp.bsms.pk/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));

            try {
                Message message = new Message
                {
                    user = "username",
                    password = "secret",
                    to = "923123456789",
                    mask = "BrainTEL",
                    message = "Your Message"
                };
                var url = await CreateMessageAsync(message);
                Console.WriteLine($"Created at {url}");
            }
            catch (Exception e) {
                Console.WriteLine(e.Message);
            }
            Console.ReadLine();
        }
    }
}`,
  },
  {
    value: "python",
    label: "PYTHON",
    language: "python",
    code: `import requests
payload = {'user': 'username', 'password': 'secret', 'to': '923123456789', 'mask': 'BrainTEL', 'message': 'Your message'}
r = requests.get('https://cp.bsms.pk/api/quick/message', params=payload)
r.text`,
  },
  {
    value: "php",
    label: "PHP",
    language: "php",
    code: `function httpPost($url,$params)
{
    $postData = '';
    foreach($params as $k => $v) {
        $postData .= $k . '='.$v.'&';
    }
    $postData = rtrim($postData, '&');

    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_POST, count($postData));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

$url = "https://cp.bsms.pk/api/quick/message";
$params = [
    "user" => "username",
    "password" => "password",
    "mask" => "BrainTEL",
    "to" => "923123456789",
    "message" => "Your Message",
];
httpPost($url,$params);`,
  },
];

const APIDocumentation = () => {
  return (
    <section id="api-documentation" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-body text-primary mb-4">
            <FileText size={16} />
            <span>Complete Documentation</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-primary mb-4">
            API Documentation
          </h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto">
            Everything you need to integrate Pakistan's most reliable SMS API. Download our
            comprehensive PDF guide with detailed examples and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentationSections.map((section, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {section.icon}
              </div>
              <h3 className="text-lg font-bold font-raleway text-foreground mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground font-lato leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold font-raleway text-foreground mb-3">
              Getting Started
            </h3>
            <p className="text-muted-foreground font-lato max-w-2xl mx-auto">
              Setup is quick, easy and free. You can be sending SMS messages in just a few minutes!
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
            <Tabs defaultValue="android" className="w-full">
              <TabsList className="w-full justify-start mb-6 flex-wrap h-auto gap-2 bg-muted/50 p-2">
                {codeSamples.map((sample) => (
                  <TabsTrigger
                    key={sample.value}
                    value={sample.value}
                    className="text-xs md:text-sm font-semibold"
                  >
                    {sample.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {codeSamples.map((sample) => (
                <TabsContent key={sample.value} value={sample.value} className="mt-0">
                  <div className="mb-4">
                    <h4 className="text-lg md:text-xl font-bold font-raleway text-foreground">
                      {sample.label}{" "}
                      <span className="text-muted-foreground font-normal text-base">
                        Sample Code
                      </span>
                    </h4>
                  </div>
                  <CodeBlock code={sample.code} language={sample.language} showLineNumbers={false} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl p-12 shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xs rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold font-raleway text-primary-foreground mb-4">
                Download Full API Documentation
              </h3>
              <p className="text-lg text-primary-foreground/90 font-lato mb-8">
                Get the complete PDF guide with detailed examples in 6 programming languages, error
                handling, and integration best practices.
              </p>
              <a href="/docs/BSMS_API_Documentation.pdf" download className="inline-block">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Download className="w-5 h-5" />
                  Download PDF (v2.0)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIDocumentation;
