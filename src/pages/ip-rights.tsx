"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Countdown from "@/components/countdown";
import Footer from "@/components/footer";
import Head from "next/head";

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css?family=Press+Start+2P";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    fontLink.onload = () => {
      setFontLoaded(true);
    };
  }, []);

  return fontLoaded ? (
    <>
      <Head>
        <title>4762 Armada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div
          className={`fixed inset-0 bg-black opacity-50 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <div className="header fixed h-20 left-0 top-0 z-10 w-full flex items-center justify-between pr-2 pl-2">
          <Countdown />
          <span
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="border-l-4 border-white pl-2 text-blue-600"
          >
            {"Menu"}
          </span>
        </div>
        <div className="grid text-left lg:w-8/12  pt-20 pb-60 mb-40">
          <div className="text-ip">
            <p className="c1 c9 title">
              <span className="c13">PUNK ARMADA TERMS</span>
            </p>
            <p className="c1">
              <span className="c0">
                PUNK Armada is a collection of 33,333 unique digital collectible
                characters represented by non&shy; fungible tokens (such tokens,
                &quot;PUNK Armada NFTs&quot;) minted by a smart contract
                deployed to the Ethereum blockchain at address
              </span>
              <span className="c0">{" 0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "}</span>
              <span className="c0">
                &nbsp;(the &quot;PUNK Armada Smart Contract&quot;). The PUNK
                Armada Smart Contract associates each PUNK Armada NFT with a
                piece of digital art displaying one of the PUNK Armada
                characters (&quot;PUNK Armada Art&quot;).
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                These terms (&quot;Terms&quot;) are a legally binding agreement
                by and between punk4762. (&quot;punk4762,&quot; &quot;we&quot;
                or &quot;us&quot;), and any owner of a PUNK Armada NFT
                (&quot;you&quot; or &quot;Owner&quot;) governing the
                parties&#39; rights and obligations with respect to PUNK Armada
                NFTs and PUNK Armada Art.
              </span>
            </p>
            <p className="c1">
              <span className="c3">
                NOTICE REGARDING ARBITRATION AND CLASS ACTION WAIVER:
              </span>
            </p>
            <p className="c1">
              <span className="c3">
                BY ACCEPTING THESE TERMS, YOU ARE AGREEING (WITH LIMITED
                EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND punk4762
                THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT.
                PLEASE REVIEW CAREFULLY SECTION 10 (DISPUTE RESOLUTION) BELOW
                FOR DETAILS REGARDING ARBITRATION. HOWEVER, IF YOU ARE A
                RESIDENT OF A JURISDICTION WHERE APPLICABLE LAW PROHIBITS
                ARBITRATION OF DISPUTES, THE AGREEMENT TO ARBITRATE IN SECTION
                10 WILL NOT APPLY TO YOU, BUT THE PROVISIONS OF SECTION 12
                (GOVERNING LAW AND FORUM CHOICE) AND RELEVANT PROVISIONS OF
                APPLICABLE LAW WILL STILL APPLY.
              </span>
            </p>
            <p className="c1">
              <span className="c3">
                YOU ALSO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION
                LAWSUIT OR CLASS WIDE ARBITRATION.
              </span>
            </p>
            <p className="c1">
              <span className="c3">1. Ownership.</span>
            </p>
            <p className="c1">
              <span>(a) </span>
              <span className="c2">You Own Your PUNK Armada NFT</span>
              <span className="c0">
                . When you own a digital wallet that holds a PUNK Armada NFT, as
                recorded by the PUNK Armada Smart Contract, you hold the
                exclusive right to hold, sell, transfer, and execute blockchain
                transactions involving that PUNK Armada NFT (&quot;Your PUNK
                Armada NFT&quot;). Except for the PUNK Armada NFTs we own,
                punk4762 has no right or ability to seize, freeze, or otherwise
                modify the ownership of any PUNK Armada NFT.
              </span>
            </p>
            <p className="c1">
              <span>(b) </span>
              <span className="c2">
                We Own (but License to You) the IP in Your PUNK Armada Art
              </span>
              <span className="c0">
                . punk4762 owns all rights, title, and interest in and to the
                PUNK Armada Art including any and all copyrights, trademarks,
                and other intellectual property rights therein (&quot;IP&quot;).
                However, we grant you the License (defined below) to use the
                PUNK Armada Art associated with Your PUNK Armada NFT (&quot;Your
                PUNK Armada Art&quot;) for as long as you hold Your PUNK Armada
                NFT.
              </span>
            </p>
            <p className="c1">
              <span>(c) </span>
              <span className="c2">
                You Own the IP in Your Derivative PUNK Armada Works
              </span>
              <span>
                . As between you and punk4762, you own all rights, title and
                interest in and to any &quot;derivative work,&quot; as defined
                by the United States Copyright Act, based upon Your PUNK Armada
                Art created during the License Term (defined below)
                (&quot;Derivative PUNK Armada Work&quot;);{" "}
              </span>
              <span className="c2">provided, however,</span>
              <span className="c0">
                &nbsp;that (i) we retain the copyright in the PUNK Armada Art
                underlying any Derivative PUNK Armada Work; (ii) your use of any
                Derivative PUNK Armada Work during and after the License Term is
                subject to these Terms; and (iii) your use of any Derivative
                PUNK Armada Work after the License Term may require a license
                from the current owner of the PUNK Armada NFT.
              </span>
            </p>
            <p className="c1">
              <span>(d) </span>
              <span className="c2">Utility &amp; Benefits.</span>
              <span className="c0">
                &nbsp;Owners may be offered utility, benefits, or entitlements
                (collectively,&quot;Utility&quot;) from time to time, but these
                Terms do not confer any Utility except as granted by the
                License. Any Utility may be subject to other terms and
                conditions. punk4762 will not be responsible in any manner for
                any Utility offered by any third party.
              </span>
            </p>
            <p className="c1">
              <span className="c3">2. License.</span>
            </p>
            <p className="c1">
              <span>(a) </span>
              <span className="c2">Grant. </span>
              <span className="c0">
                Subject to your acceptance of, and compliance with, these Terms,
                upon lawfully acquiring Your PUNK Armada NFT and, for so long as
                you hold Your PUNK Armada NFT (both dates as recorded by the
                PUNK Armada Smart Contract) (the &quot;License Term&quot;),
                punk4762 grants to you an exclusive, universe-wide,
                royalty-free, sublicensable license to reproduce, distribute,
                prepare derivative works based upon, publicly display, publicly
                perform, transmit, and otherwise use and exploit, Your PUNK
                Armada Art (&quot;License&quot;). The License is intended to be
                broad, enabling you to make both commercial and non&shy;
                commercial uses of Your PUNK Armada Art, in any and all media,
                whether existing now or invented later, subject only to the
                restrictions set forth below.
              </span>
            </p>
            <p className="c1">
              <span>(b) </span>
              <span className="c2 c10">Restrictions and Reservations.</span>
            </p>
            <p className="c1">
              <span className="c0">
                i. The License extends only to Your PUNK Armada Art-meaning, the
                complete selection and arrangement of all base layers, features,
                attributes, and other elements that comprise Your PUNK Armada
                Art. Thus, while the License allows you to create and exploit
                Derivative PUNK Armada Works, the License does not grant you
                rights in any individual element of Your PUNK Armada Art, or a
                license to exploit any individual element separate and apart
                from Your PUNK Armada Art. For example, the License allows you
                to create three-dimensional renditions of, and to add new
                clothing to, Your PUNK Armada Art, but does not allow you to
                extract individual features (e.g., hair, accessories) for use in
                a separate work.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                ii. The License does not grant you any rights in or to
                punk4762&#39;s (or any other) trade names, brands, trade dress,
                or trademarks (e.g., &quot;PUNK Armada&quot; or
                &quot;punk4762&quot;), all of which are expressly reserved to
                punk4762 (collectively, &quot;punk4762 TM Rights&quot;). You
                hereby agree that any punk4762 TM Rights you purport to acquire,
                together with any associated goodwill, shall automatically,
                immediately, and at your expense be assigned to punk4762. For
                the sake of clarity, the punk4762 TM Rights do not include Your
                PUNK Armada Art, in which you may acquire trademark rights
                through the exercise of your rights in accordance with, and
                subject to, these Terms and applicable law.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                iii. Any application to register a trademark in Your PUNK Armada
                Art must occur during the License Term and be based solely upon
                the actual use of the PUNK Armada Art in commerce and solely for
                the goods or services in connection with which Your PUNK Armada
                Art has actually been used in commerce in the applicable
                jurisdiction as of the date of the application. Thus, you may
                not seek to register a trademark in Your PUNK Armada Art on an
                &quot;intent to use&quot; basis or where you otherwise have not
                used Your PUNK Armada Art in commerce.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                iv. You may not use Your PUNK Armada Art in a manner that
                expresses hate or encourages violence towards a person or group
                based on membership in a protected class, such as race,
                religion, gender, orientation, or disability.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                v. You may not use Your PUNK Armada Art in a manner that
                violates applicable law.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                vi. All rights not expressly granted herein are reserved by us.
              </span>
            </p>
            <p className="c1">
              <span>(c) </span>
              <span className="c2">License Back to punk4762</span>
              <span className="c0">
                . You grant to punk4762 an irrevocable, perpetual, non&shy;
                exclusive, universe-wide, royalty-free, sublicensable license to
                publicly display and otherwise use Your PUNK Armada Art
                alongside other PUNK Armada Art for the purpose of promoting or
                exhibiting the entire PUNK Armada collection.
              </span>
            </p>
            <p className="c1">
              <span className="c3">3. Enforcement.</span>
            </p>
            <p className="c1">
              <span>(a) </span>
              <span className="c2">Copyright Notices</span>
              <span className="c0">
                . You may include the following copyright notice with Your PUNK
                Armada Art: &quot;PUNK Armada &copy; 2023 punk4762&quot; (the
                &quot;punk4762 Copyright Notice&quot;). Subject to your
                compliance with these Terms, you may include a copyright notice
                identifying you, or such other person you designate, as the
                copyright owner of any Derivative PUNK Armada Work created
                during the License Term, provided that you also include the
                punk4762 Copyright Notice.
              </span>
            </p>
            <p className="c1">
              <span>(b) </span>
              <span className="c2">Copyright Registrations</span>
              <span className="c0">
                . Any application to obtain a copyright registration in Your
                PUNK Armada Art shall identify &quot;punk4762&quot; as the
                copyright owner of the PUNK Armada Art. Any application to
                obtain a copyright registration in a Derivative PUNK Armada Work
                may identify you or such other person you designate as the
                copyright owner but shall identify Your PUNK Armada Art as a
                preexisting work upon which the Derivative PUNK Armada Work is
                based.
              </span>
            </p>
            <p className="c1">
              <span>(c) </span>
              <span className="c2">Actions</span>
              <span className="c0">
                . To the extent applicable law authorizes you to bring a claim
                for infringement based upon the unauthorized use of Your PUNK
                Armada Art, you agree that: (i) any such claim shall be based
                solely upon the unauthorized use of Your PUNK Armada Art, not
                other PUNK Armada Art-for example, on the ground that the other
                PUNK Armada Art is substantially similar to Your PUNK Armada
                Art; and (ii) punk4762 may, in its sole discretion, join and,
                unless it would materially prejudice your rights, elect to take
                over the control of the prosecution of, any such action.
              </span>
            </p>
            <p className="c1">
              <span>(d) </span>
              <span className="c2">Disputes Among Owners</span>
              <span className="c0">
                . punk4762 has no obligation to support the resolution of, or
                resolve any, dispute that may arise between PUNK Armada NFT
                owners.
              </span>
            </p>
            <p className="c1">
              <span className="c3">4. Transfers.</span>
            </p>
            <p className="c1">
              <span>(a) </span>
              <span className="c2">No Decoupling</span>
              <span className="c0">
                . Except as expressly provided herein, ownership of a PUNK
                Armada NFT and the License are not separable in any way. You may
                not engage in any transaction or activity that purports to
                decouple the License from Your PUNK Armada NFT.
              </span>
            </p>
            <p className="c1">
              <span>(b) </span>
              <span className="c2">Termination of License</span>
              <span className="c0">
                . Upon the transfer of Your PUNK Armada NFT to a new Owner, as
                recorded by the PUNK Armada Smart Contract: (i) your License
                hereunder shall immediately and automatically terminate; (ii)
                you must discontinue any use of Your PUNK Armada Art as a
                trademark or other source identifier; and {" {iii) "} any
                trademark and corresponding registration obtained in connection
                with your exercise of the License shall be deemed abandoned
                unless duly transferred to the new Owner under a separately
                negotiated written agreement.
              </span>
            </p>
            <p className="c1">
              <span>(c) </span>
              <span className="c2">Published PUNK Armada Works</span>
              <span className="c0">
                . If, during the License Term, you create and make available to
                the public a work using Your PUNK Armada Art (a &quot;Published
                PUNK Armada Work&quot;), you may, except as set forth in Section{" "}
                {"4{b)(ii)"}, continue to use and exploit that Published PUNK
                Armada Work in accordance with these Terms after the License
                Term; provided, however, that: (i) you will be responsible for
                any obligations or liabilities arising from your continued use
                of the Published PUNK Armada Work after the License Term; and
                (ii) this privilege does not allow you to use the PUNK Armada
                Art to create any new works or materials after the License Term.
                Thus, for example:
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                &bull; A digital series featuring Your PUNK Armada Art that was
                released during the License Term may continue to run after the
                License Term, but any creation or distribution of any new
                episodes featuring the PUNK Armada Art would require a license
                from the new Owner.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                &bull; After the License Term, you may sell off existing (at the
                time of transfer) inventories of merchandise featuring Your PUNK
                Armada Art that were created and offered for sale during the
                License Term, but the creation or distribution of any new
                merchandise or inventory featuring the PUNK Armada Art would
                require a license from the new Owner.
              </span>
            </p>
            <p className="c1">
              <span className="c3">
                5. Owner&#39;s Representations and Warranties.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                Owner represents and warrants that Owner:
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (a) is over the age of majority and has the legal capacity to
                enter into these Terms;
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (b) will only use and interact with any PUNK Armada NFT and PUNK
                Armada Art in accordance with these Terms;
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (c) will comply with all applicable law in the exercise of its
                rights and obligations under these Terms and will not violate
                any right of punk4762, its licensors, or any right of any third
                party; and
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (d) is not, and will not, knowingly execute a transaction
                involving a PUNK Armada NFT or PUNK Armada Art with any person
                who is, (i) located in a country that is subject to a U.S.
                Government embargo, or that has been designated by the U.S.
                Government as a terrorist-supporting country; or (ii) listed on
                any U.S. Government list of prohibited or restricted parties.
              </span>
            </p>
            <p className="c1">
              <span className="c3">6. Warranty Disclaimers.</span>
            </p>
            <p className="c1">
              <span className="c0">
                (a) EACH PUNK Armada NFT AND PUNK Armada NFT ART IS PROVIDED
                &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY
                OF ANY KIND. WITHOUT LIMITING THE FOREGOING, punk4762 EXPLICITLY
                DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING,
                WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND
                NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
                DEALING OR USAGE OF TRADE.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (b) EACH PUNK Armada NFT IS AN INTANGIBLE DIGITAL ASSET THAT
                EXISTS ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED ON THE
                ETHEREUM BLOCKCHAIN. ANY TRANSFER OF OWNERSHIP THAT MIGHT OCCUR
                IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE DECENTRALIZED LEDGER
                WITHIN THE ETHEREUM BLOCKCHAIN, WHICH punk4762 DOES NOT CONTROL.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (c) punk4762 WILL NOT BE RESPONSIBLE OR LIABLE TO OWNER FOR ANY
                LOSS IN CONNECTION WITH ANY PUNK Armada NFT OR PUNK Armada ART
                AND TAKES NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO OWNER
                FOR, ANY USE OF OR INABILITY TO USE ANY PUNK Armada NFT OR PUNK
                Armada ART, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES, OR
                CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN PASSWORDS,
                INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED WALLET
                ADDRESSES; (II) THE BEHAVIOR OR OUTPUT OF ANY SOFTWARE OR
                HARDWARE; (Ill) DATA LOSS OR CORRUPTION; (IV) ANY FEATURES,
                DEVELOPMENT, ERRORS, OR OTHER ISSUES WITH BLOCKCHAIN NETWORKS OR
                WALLETS; (V) UNAUTHORIZED ACCESS TO ANY PUNK Armada NFT OR PUNK
                Armada ART; OR (VI) THE ACTS OR OMISSIONS OF ANY THIRD PARTY.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (d) SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                WARRANTIES IN CONSUMER CONTRACTS, SO THE ABOVE EXCLUSION MAY NOT
                APPLY TO YOU.
              </span>
            </p>
            <p className="c1">
              <span className="c6">7. Assumption of Risk</span>
              <span className="c0">
                . Owner accepts and acknowledges all risks associated with the
                following:
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (a) PUNK Armada NFTs and PUNK Armada Art may be used in myriad
                ways. While we strongly encourage transparency, communication,
                and research prior to acquiring a PUNK Armada NFT, including to
                understand what previous and existing uses have been made of the
                PUNK Armada NFT and PUNK Armada Art and how those uses may
                affect value, any purchase of a PUNK Armada NFT is at the
                purchaser&#39;s own risk. punk4762 is not responsible for
                verifying or providing information on how a PUNK Armada NFT or
                its PUNK Armada Art have been exploited. Additional
                documentation from an Owner may be necessary or prudent.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (b) punk4762 is not responsible for determining or paying any
                taxes that apply to any Owner&#39;s purchase, sale, or transfer
                of rights in each PUNK Armada NFT. As between the parties, Owner
                is solely responsible for determining what, if any, taxes apply
                to such transactions.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (c) Transactions involving PUNK Armada NFTs and PUNK Armada Art
                rely on third-party or decentralized platforms, systems, or
                marketplaces. We do not maintain, control, or assume any
                obligations with respect to such platforms, systems, or
                marketplaces. To the extent that punk4762 provides links or
                access to third party platforms, sites, or other resources, it
                does so only as a convenience and is not responsible for the
                content, products, or services on or available from those third
                parties or through any content displayed thereon.
              </span>
            </p>
            <p className="c1">
              <span className="c6">8. Indemnity.</span>
              <span className="c0">
                &nbsp;Owner shall defend, indemnify, and hold punk4762, its
                licensors, affiliates, representatives, and service providers,
                and each of them, and all of their respective officers,
                directors, employees, and agents (the &quot;Indemnified
                Parties&quot;) harmless from and against any and all claims,
                damages, losses, costs, investigations, liabilities, judgments,
                fines, penalties, settlements, interest, expenses, and other
                similar results or occurrences (including attorneys&#39; fees)
                that directly or indirectly arise from, or are related to or in
                connection with, any claim, suit, action, demand, or proceeding
                or other similar occurrence, process, or activity that is
                initiated, made, brought, or financed by a third party
                (including any person who accesses or transacts using any PUNK
                Armada NFT or PUNK Armada Art, whether or not such person
                personally purchased a PUNK Armada NFT) against the Indemnified
                Parties, or on account of the investigation, defense, or
                settlement thereof, arising out of, related to, or in connection
                with: (a) your access to or use of any NFT marketplace or
                third-party services or products; (b) your breach or alleged
                breach of these Terms; (c) your exercise or attempted exercise
                of the License; or (d) your actual or alleged violation of
                applicable law. Counsel to be used in the defense of such claim
                must be approved by punk4762 in writing prior to retention of
                such counsel and, upon our request, you will allow us to
                participate in the defense of any such claims. You will not
                enter into any settlement or compromise of any claim or
                litigation or that includes an admission of liability without
                our prior written consent.
              </span>
            </p>
            <p className="c1">
              <span className="c3">9. Limitation of Liability.</span>
            </p>
            <p className="c1">
              <span className="c0">
                (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, NO INDEMNIFIED PARTY
                WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, OR
                CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST
                REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA
                OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE, OR SYSTEM
                FAILURE, OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING
                OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR
                INABILITY TO USE OR INTERACT WITH ANY PUNK Armada NFT OR PUNK
                Armada ART, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
                NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND
                WHETHER OR NOT punk4762 OR ITS SERVICE PROVIDERS HAVE BEEN
                INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED
                REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
                PURPOSE. IN NO EVENT WILL ANY INDEMNIFIED PARTY&#39;S CUMULATIVE
                LIABILITY HEREUNDER FROM ALL CAUSES OF ACTION AND ALL THEORIES
                OF LIABILITY EXCEED $100.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (b) BY PURCHASING OR OWNING A PUNK Armada NFT, OWNER
                ACKNOWLEDGES THAT THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET
                FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN
                BETWEEN punk4762 AND OWNER.
              </span>
            </p>
            <p className="c1">
              <span className="c3">10. Dispute Resolution.</span>
            </p>
            <p className="c1">
              <span>(a) </span>
              <span className="c2">Mandatory Arbitration of Disputes.</span>
              <span className="c0">
                &nbsp;Any dispute, claim, or controversy arising out of or
                relating to these Terms or the breach, termination, enforcement,
                interpretation, or validity thereof, or the use of the PUNK
                Armada NFT or PUNK Armada Art (&quot;Dispute&quot;) must be
                resolved solely by binding, individual arbitration and not in a
                class, representative, or consolidated action or proceeding.
                Each party waives the right to a trial in court and/or by a
                jury. This arbitration provision shall survive any termination
                of the License or these Terms.
              </span>
            </p>
            <p className="c1">
              <span>(b) </span>
              <span className="c2">Exceptions</span>
              <span className="c0">
                . As a limited exception to Section 10(a) above: (i) the parties
                may seek to resolve a Dispute in small claims court if it
                qualifies; and (ii) each party retains the right to seek
                injunctive or other equitable relief from a court to prevent (or
                enjoin) the infringement or misappropriation of its intellectual
                property rights.
              </span>
            </p>
            <p className="c1">
              <span>(c) </span>
              <span className="c2">
                Conducting Arbitration and Arbitration Rules
              </span>
              <span className="c0">
                . The arbitration will be conducted by the American Arbitration
                Association (&quot;AAA&quot;) under its Consumer Arbitration
                Rules (the &quot;AAA Rules&quot;) then in effect, except as
                modified by these Terms. The AAA Rules are available at www.
                adr.org or by calling 1-800-778-7879. A party who wishes to
                start arbitration must submit a written Demand for Arbitration
                to AAA and give notice to the other party as specified in the
                AAA Rules. The AAA provides a form Demand for Arbitration at
                www.adr.org. Any arbitration hearings will take place in the
                county (or parish) where one lives, with provision to be made
                for remote appearances to the maximum extent permitted by the
                AAA rules, unless the parties both agree to a different
                location. The parties agree that the arbitrator shall have
                exclusive authority to decide all issues relating to the
                interpretation, applicability, enforceability, and scope of
                these Terms.
              </span>
            </p>
            <p className="c1">
              <span>(d) </span>
              <span className="c2">Arbitration Costs.</span>
              <span className="c0">
                &nbsp;Payment of all filing, administration, and arbitrator fees
                will be governed by the AAA Rules, and punk4762 won&#39;t seek
                to recover the administration and arbitrator fees for which
                punk4762 is responsible unless the arbitrator finds your Dispute
                is frivolous. If punk4762 prevails in arbitration, punk4762 will
                pay all of its attorneys&#39; fees and costs and will seek to
                recover them from you. If you prevail in arbitration, you will
                be entitled to an award of attorneys&#39; fees and expenses to
                the extent provided under applicable law.
              </span>
            </p>
            <p className="c1">
              <span>(e) </span>
              <span className="c2">Injunctive and Declaratory Relief</span>
              <span className="c0">
                . Except as provided in Section lO(d) above, the arbitrator
                shall determine all issues of liability on the merits of any
                claim asserted by either party and may award declaratory or
                injunctive relief only in favor of the individual party seeking
                relief and only to the extent necessary to provide relief
                warranted by that party&#39;s individual claim. To the extent
                that you or punk4762 prevail on a claim and seek public
                injunctive relief (that is, injunctive relief that has the
                primary purpose and effect of prohibiting unlawful acts that
                threaten future injury to the public), the entitlement to and
                extent of such relief must be litigated in a civil court of
                competent jurisdiction and not in arbitration. The parties agree
                that litigation of any issues of public injunctive relief shall
                be stayed pending the outcome of the merits of any individual
                claims in arbitration.
              </span>
            </p>
            <p className="c1">
              <span>(f) </span>
              <span className="c2">Class Action Waiver</span>
              <span>. </span>
              <span className="c6">
                YOU AND punk4762 AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST
                THE OTHER ONLY IN ITS INDIVIDUAL CAPACITY, AND NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE PROCEEDING
              </span>
              <span className="c0">
                . Further, if a Dispute is resolved through arbitration, the
                arbitrator may not consolidate another person&#39;s claims with
                a party&#39;s claims, and may not otherwise preside over any
                form of a representative or class proceeding. If this specific
                provision is found to be unenforceable, then the entirety of
                this Dispute Resolution section shall be null and void.
              </span>
            </p>
            <p className="c1">
              <span>(g) </span>
              <span className="c2">Severability</span>
              <span className="c0">
                . With the exception of any of the provisions in Section lO(f)
                (Class Action Waiver), if an arbitrator or court of competent
                jurisdiction decides that any part of these Terms is invalid or
                unenforceable, the other parts of these Terms will still apply.
              </span>
            </p>
            <p className="c1">
              <span className="c6">11. Amendments.</span>
              <span>
                &nbsp;punk4762 reserves the right to clarify or amend these
                Terms by publicly publishing a new version of them on{" "}
              </span>
              <span className="c2 c5">
                <a
                  className="c7"
                  href="https://www.google.com/url?q=https://www.4762armada.com/&amp;sa=D&amp;source=editors&amp;ust=1700931849208891&amp;usg=AOvVaw0XKlIQNddldijbxdK3l_s7"
                >
                  https://www.4762armada.com/
                </a>
              </span>
              <span className="c0">&nbsp;.</span>
            </p>
            <p className="c1">
              <span className="c6">12. Governing Law and Forum Choice</span>
              <span className="c0">
                . These Terms and any action related thereto will be governed by
                the U.S. Federal Arbitration Act, federal arbitration law, and
                the laws of the State of New York, without regard to its
                conflict of laws provisions. Except as otherwise expressly set
                forth in Section 10 (Dispute Resolution), the exclusive
                jurisdiction for all Disputes (defined above) will be the state
                and federal courts located in the State of Arizona, and you and
                punk4762 each waive any objection to jurisdiction and venue in
                such courts.
              </span>
            </p>
            <p className="c1">
              <span className="c3">13. Miscellaneous.</span>
            </p>
            <p className="c1">
              <span className="c0">
                (a) The License applies only to the PUNK Armada NFT on the
                blockchain that punk4762, in its sole discretion, may designate,
                which designation shall apply retroactively. Thus, for example,
                if a fork or other event purports to result in duplicate PUNK
                Armada NFTs, only the non-fungible token recorded on the
                blockchain designated by punk4762 will be eligible to receive
                the benefit of the License. Any license purportedly granted
                hereunder to the owner of a non-fungible token recorded on a
                blockchain not designated by punk4762 is void ab initio.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (b) These Terms will transfer and be binding upon and will inure
                to the benefit of the parties and their permitted successors and
                assigns.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (c) These Terms constitute the entire agreement, and supersede
                any and all prior or contemporaneous representations,
                understandings and agreements, between the parties with respect
                to the subject matter of these Terms, all of which are hereby
                merged into these Terms. Without limitation, the terms of any
                other document, publication, course of dealing, or course of
                trade will not modify these Terms, except as expressly provided
                in Sections 11 or 13(a) or as the parties may agree in writing.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (d) Failure to promptly enforce a provision of these Terms or
                any rights related to the PUNK Armada NFT or PUNK Armada Art
                will not be construed as a waiver of such provision or rights.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (e) Nothing contained in these Terms will be deemed to create,
                or be construed as creating, a joint venture or partnership
                between the parties. Neither party is, by virtue of these Terms
                or otherwise, authorized as an agent or legal representative of
                the other party. Neither party is granted any right or authority
                to assume or to create any obligation or responsibility, express
                or implied, on behalf or in the name of the other party. Nothing
                contained in these Terms will be deemed to create any
                third-party beneficiary right upon any third party whatsoever.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (f) The parties shall execute and deliver to the other party any
                and all such other instruments in reasonable mutually acceptable
                form and substance and shall take any and all such other actions
                as may be reasonably necessary to carry the intent of these
                Terms into full force and effect.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (g) If any one or more of the provisions of these Terms should
                be ruled wholly or partly invalid or unenforceable, then the
                provisions held invalid or unenforceable will be deemed amended,
                and the arbitrator, court, or other government body is
                authorized to reform the provision(s) to the minimum extent
                necessary to render them valid and enforceable in conformity
                with the parties&#39; intent as manifested herein.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (h) The headings to sections of these Terms are for convenience
                or reference only and do not form a part of these Terms and will
                not in any way affect its interpretation.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (i) Neither party will be afforded or denied preference in the
                construction of these Terms, whether by virtue of being the
                drafter or otherwise.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                (j) For purposes of these Terms, the words and phrases
                &quot;include,&quot; &quot;includes,&quot;
                &quot;including,&quot; and &quot;such as&quot; are deemed to be
                followed by the words &quot;without limitation&quot;.
              </span>
            </p>
            <p className="c11">
              <span>
                (k) Owner may give notice to punk4762 by contacting punk4762 at{" "}
              </span>
              <span className="c2 c5">
                <a
                  className="c7"
                  href="https://www.google.com/url?q=https://t.co/fV1L34naso&amp;sa=D&amp;source=editors&amp;ust=1700931849210214&amp;usg=AOvVaw1A6rFcCwNSL8I1lwSenHUU"
                >
                  http://discord.gg/4762
                </a>
              </span>
              <span className="c0">. Notice is effective upon receipt.</span>
            </p>
            <p className="c1">
              <span className="c0">
                (I) The parties have agreed to contract electronically and,
                accordingly, electronic signatures or any other forms of
                acceptance permitted by law, will be given the same effect and
                weight as original signatures.
              </span>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  ) : (
    "..."
  );
}
