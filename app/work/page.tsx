import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="prose prose-neutral dark:prose-invert">
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">Corgi Labs (YC W23)</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Founding Engineer 2023-2024
          </p>
          <p>
            <a href="https://corgilabs.ai">Corgi Labs</a> was a great experience for me to learn how to build products for users.
          </p>
          <ul>
            <li>
              Wore many hats, as a fullstack engineer, a devops engineer and sometimes a data scientist.
            </li>
          </ul>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">Fazz (YC S15)</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Machine Learning Engineer 2022-2023
          </p>
          <p>
            I joined <a href="https://fazz.com/">Fazz</a> as its first machine learning engineer in its newly setup Data Science team to deploy the company's first fraud detection machine learning model on production.
          </p>
          <ul>
            <li>
              Created bash scripts to automate deployment for data scientists' development code on notebook to production on github so we can move away from editing and praying on Cloud Functions.
            </li>
            <li>
              Migrated batched features from being stored in BigQuery to DynamoDB for the real time ML model API to ingest the features real time for inferencing.
            </li>
            <li>
              Migrated the deployment of ML model within a different team's mobile app to AWS Sagemaker so my team can have more visibility over the performance of the model and iterate on it.
            </li>
          </ul>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">MoneyLion</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Machine Learning Engineer 2019-2022
          </p>
          <p>
            When I join <a href="https://www.moneylion.com/">MoneyLion</a>, the company was growing quickly and they were looking for engineers to scale its backend services and machine learning models to serve millions of users.
          </p>
          <ul>
            <li>
              Improved the latency of the company's real time credit scoring model deployed on Kubernetes by load testing and code refactoring
            </li>
            <li>
              Optimized the company's ML model API gateway service to make use of <a href="https://docs.paralleluniverse.co/quasar/">lightweight threads</a>.
            </li>
          </ul>
        </div>
    </section>
    
  );
}
