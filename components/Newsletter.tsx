type NewsletterType = {
  title?: string;
}

export default function Newsletter({title}: NewsletterType) {
  return (
    <section className="flex flex-col md:flex-row px-3 py-12 border-t-2 border-[#1C1C1C] mt-12 gap-10">
      <div className="w-full">
        <h2 className="text-[#171717] text-2xl mb-3 font-bold">{title}</h2>
        <p className="text-lg">Latest news, reviews, analysis and opinion, plus unmissable deals for bunkered subscriptions, events, and our commercial partners.</p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-nowrap gap-4 mb-6">
          <input
            placeholder="Email address"
            className="rounded p-3 border border-[#cecccc] w-full"
          />
          <button className="py-2 px-4 bg-[#d82a2d] w-[120px] text-sm text-white rounded">Subscribe</button>
        </div>
        <div>
          <div className="flex items-center mb-4">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 border rounded border" />
              <label className="ml-2 text-xs">I would like to receive regular email offers and promotions for bunkered events.</label>
          </div>
            <div className="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 border rounded border" />
              <label className="ml-2 text-xs">I would like to receive regular email offers and promotions from our commercial partners. Don't worry - we'll never share your data with them.</label>
          </div>
        </div>
      </div>
    </section>
  )
}